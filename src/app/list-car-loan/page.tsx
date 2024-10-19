"use client";
import ModalAddCarLoan, {
  IDataModel,
} from "@/components/car-loan/modal-add-loan";
import { Button } from "@/components/ui/button";
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
import { carLoanTransaction } from "@/lib/constans";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const ListUser = () => {
  const { toast } = useToast();
  const [mainData, setMainData] = useState<IDataModel[]>([]);
  const [searchVal, setSearchVal] = useState<string>("");
  const [defaultValue, setDefaultValue] = useState<IDataModel | null>(null);
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  useEffect(() => {
    setMainData(carLoanTransaction);
  }, []);
  return (
    <div className="custom-container-xl mt-10">
      <ModalAddCarLoan
        isOpen={modalAdd}
        onChangeOpen={(val) => {
          setModalAdd(val);
          setDefaultValue(null);
        }}
        onSubmitData={(data) =>
          setMainData((old) => [
            { ...data, id: (mainData[mainData.length - 1]?.id || 100) + 1 },
            ...old,
          ])
        }
        onEditData={(data) => {
          const updatedCarLoanTransaction = mainData.filter(
            (transaction) => transaction.id !== data?.id
          );
          setMainData(() => [{ ...data }, ...updatedCarLoanTransaction]);
        }}
        defaultValue={defaultValue}
      />
      <Card>
        <CardHeader>
          <CardTitle>List of Vehicle Loan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              placeholder="Search by Customer Name eg: Yosephine Stella"
              className="w-1/3"
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
            />
            <Button onClick={() => setModalAdd(true)}>Add New Loan</Button>
          </div>
          <Table>
            <TableCaption>A list transaction loan vehicle.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Customer</TableHead>
                <TableHead>No telpon</TableHead>
                <TableHead>Tipe Kendaraan</TableHead>
                <TableHead>Merek Kendaraan</TableHead>
                <TableHead>Tanggal Mulai Pinjam</TableHead>
                <TableHead>Lama Pinjam</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mainData
                .filter((el) =>
                  el.customer_name
                    .toLowerCase()
                    .includes(searchVal?.toLowerCase() ?? "")
                )
                .map((el) => (
                  <TableRow key={el.id}>
                    <TableCell className="font-medium">
                      {el.customer_name}
                    </TableCell>
                    <TableCell>{el.phone_number}</TableCell>
                    <TableCell>{el.vehicle_type}</TableCell>
                    <TableCell>{el.vehicle_name}</TableCell>
                    <TableCell>
                      {format(new Date(el.start_date), "dd MMMM yyyy")}
                    </TableCell>
                    <TableCell>{el.loan_duration}</TableCell>
                    <TableCell className="text-right flex items-center justify-end gap-x-4">
                      <Pencil
                        className="text-xs cursor-pointer text-primary-yellow"
                        onClick={() => {
                          setDefaultValue(el);
                          setTimeout(() => {
                            setModalAdd(true);
                          }, 200);
                        }}
                      />
                      <Trash2
                        className="text-xs cursor-pointer text-red-600"
                        onClick={() => {
                          const updatedCarLoanTransaction = mainData.filter(
                            (transaction) => transaction.id !== el.id
                          );
                          setMainData(updatedCarLoanTransaction);
                          toast({
                            variant: "destructive",
                            description: `Data ${el.customer_name} has ben deleted!`,
                          });
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListUser;
