"use client";

import { MainHeroImage } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "@/lib/axios-config";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
interface IFormData {
  name: string;
  email: string;
  gender: string;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus diisi minimal 2 karakter",
  }),
  email: z.string().min(1, { message: "Email tidak boleh kosong" }).email({
    message: "Masukkan alamat email yang valid",
  }),
  gender: z.string().min(1, {
    message: "Pilih salah satu jenis kelamin",
  }),
});

const Register = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: IFormData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/users", {
        ...data,
        status: "active",
      });
      if (response.status === 201)
        toast({
          description: "Pendaftaran kamu berhasil",
        });
      router.push("/authentication/list-user");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          variant: "destructive",
          description:
            error.response?.data?.[0]?.message || error.response?.data?.message,
        });
      } else {
        toast({
          variant: "destructive",
          description: "An unknown error occurred",
        });
      }
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover lg:grid lg:grid-cols-2"
      style={{ backgroundImage: `url(${MainHeroImage.src})` }}
    >
      <span></span>
      <div className="flex justify-center items-center">
        <Card className="p-8 w-3/4">
          <CardHeader>
            <CardTitle>Ingin Menjadi Bagian dari Kami?</CardTitle>
            <CardDescription>
              Lengkapi data berikut agar kami bisa menghubungi kamu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormProvider {...form}>
              <form
                className="space-y-3 pt-5"
                onSubmit={form.handleSubmit((data) => onSubmit(data))}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama</FormLabel>
                      <FormControl>
                        <Input placeholder="eg: Yosephine Stella" {...field} />
                      </FormControl>
                      <FormDescription>
                        Masukan nama lengkap anda
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="eg: yosephinestella@eratani.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Masukan email aktif anda
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis kelamin</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih disini" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="female">Wanita</SelectItem>
                            <SelectItem value="male">Laki - laki</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        Masukan jenis kelamin anda
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-5">
                  <Button
                    disabled={loading}
                    type="submit"
                    className="bg-main-green w-full text-lg"
                  >
                    {loading && (
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Submit
                  </Button>
                </div>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
