"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { vehicleBrands, vehicleTypes } from "@/lib/constans";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const formSchema = z.object({
  customer_name: z.string().min(2, { message: "Required" }),
  phone_number: z.string().min(2),
  vehicle_type: z.string().min(2),
  vehicle_name: z.string().min(2),
  start_date: z.string().min(2),
  loan_duration: z.string().min(1),
});

export interface IDataModel {
  id?: number;
  customer_name: string;
  phone_number: string;
  vehicle_type: string;
  vehicle_name: string;
  start_date: string;
  loan_duration: string;
}

const ModalAddCarLoan: React.FC<{
  isOpen: boolean;
  onChangeOpen: (val: boolean) => void;
  onSubmitData: (va: IDataModel) => void;
  onEditData: (va: IDataModel) => void;
  defaultValue: IDataModel | null;
}> = ({ isOpen, onChangeOpen, onSubmitData, defaultValue, onEditData }) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer_name: "",
    },
  });

  useEffect(() => {
    if (defaultValue) {
      form.setValue("customer_name", defaultValue.customer_name);
      form.setValue("loan_duration", defaultValue.loan_duration.split(" ")[0]);
      form.setValue(
        "phone_number",
        defaultValue.phone_number.split(" ").join("")
      );
      form.setValue("start_date", defaultValue.start_date);
      form.setValue("vehicle_name", defaultValue.vehicle_name);
      form.setValue("vehicle_type", defaultValue.vehicle_type);
    }
  }, [defaultValue]);

  const resetVal = () => {
    form.resetField("customer_name");
    form.resetField("loan_duration");
    form.resetField("phone_number");
    form.resetField("start_date");
    form.resetField("vehicle_name");
    form.resetField("vehicle_type");
  };

  const onSubmit = (data: IDataModel) => {
    if (defaultValue) {
      onEditData({
        ...data,
        loan_duration: data.loan_duration + " hours",
        id: defaultValue?.id,
      });
      toast({
        description: "Success edit data!",
      });
    } else {
      onSubmitData({ ...data, loan_duration: data.loan_duration + " hours" });
      toast({
        description: "Success add new data!",
      });
    }
    onChangeOpen(false);

    resetVal();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(val) => {
        onChangeOpen(val);
        resetVal();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Loan Data</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <FormProvider {...form}>
            <form
              className="pt-5"
              onSubmit={form.handleSubmit((data) => onSubmit(data))}
            >
              <div className="max-h-[500px] overflow-y-scroll space-y-4 px-2">
                <FormField
                  control={form.control}
                  name="customer_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Customer Name</FormLabel>
                      <FormControl>
                        <Input placeholder="eg: Yosephine Stella" {...field} />
                      </FormControl>
                      <FormDescription>Insert customer name</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="eg: 082343245524"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Insert phone number</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vehicle_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Type</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {vehicleTypes.map((el) => (
                              <SelectItem key={el} value={el}>
                                {el}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>Select Vehicle Type</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vehicle_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Brand</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {vehicleBrands.map((el) => (
                              <SelectItem key={el} value={el}>
                                {el}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>Select Vehicle Brand</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="start_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value
                                ? format(new Date(field.value), "PPP")
                                : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={
                                field.value ? new Date(field.value) : undefined
                              }
                              onSelect={(date) =>
                                field.onChange(date ? date.toISOString() : "")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormDescription>Select Start Date</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="loan_duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Loan Duration</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="in Hours, eg: 1"
                          {...field}
                          type="number"
                        />
                      </FormControl>
                      <FormDescription>
                        Insert Loan Duration in Hours
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </FormProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddCarLoan;
