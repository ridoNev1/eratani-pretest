"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import axiosInstance from "@/lib/axios-config";
import { ReloadIcon } from "@radix-ui/react-icons";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface IUserData {
  email: string;
  gender: string;
  id: number;
  name: string;
  status: string;
}

const ListUser = () => {
  const { toast } = useToast();
  const [listUser, setListUser] = useState<{
    loading: boolean;
    listUser: IUserData[];
  }>({
    loading: false,
    listUser: [],
  });

  const handleGetUsers = async () => {
    setListUser((old) => ({ ...old, loading: true }));
    try {
      const response = await axiosInstance.get("/users");
      setListUser({ loading: false, listUser: response.data });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          variant: "destructive",
          description: error.response?.data?.message,
        });
      } else {
        toast({
          variant: "destructive",
          description: "An unknown error occurred",
        });
      }
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="custom-container-xl mt-10">
      <Card>
        <CardHeader>
          <CardTitle>List of Users</CardTitle>
        </CardHeader>
        <CardContent>
          {listUser?.loading ? (
            <div className="min-h-60 w-full flex justify-center items-center">
              <ReloadIcon className="mr-2 h-10 w-10 animate-spin" />
            </div>
          ) : (
            <Table>
              <TableCaption>A list users from go REST.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>email</TableHead>
                  <TableHead>gender</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listUser.listUser.map((el) => (
                  <TableRow key={el.id}>
                    <TableCell className="font-medium">{el.name}</TableCell>
                    <TableCell>{el.email}</TableCell>
                    <TableCell>{el.gender}</TableCell>
                    <TableCell className="text-right">
                      {el.status === "inactive" ? (
                        <Badge variant="destructive">{el.status}</Badge>
                      ) : (
                        <Badge variant="default" className="bg-main-green">
                          {el.status}
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ListUser;
