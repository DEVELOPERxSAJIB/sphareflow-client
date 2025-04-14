import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  CopyMinus,
  EyeIcon,
  Trash,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    brand: "Jhon",
    creator: "Den",
  },
  {
    id: "a9fd23g4",
    amount: 142,
    status: "in process",
    brand: "Nike",
    creator: "Sarah",
  },
  {
    id: "l1op74ds",
    amount: 520,
    status: "failed",
    brand: "Adidas",
    creator: "Mike",
  },
  {
    id: "x8nv92aa",
    amount: 299,
    status: "success",
    brand: "Puma",
    creator: "Emily",
  },
  {
    id: "t5eq83bb",
    amount: 105,
    status: "in process",
    brand: "Reebok",
    creator: "Lucas",
  },
  {
    id: "z7uy48cc",
    amount: 480,
    status: "success",
    brand: "Under Armour",
    creator: "Nina",
  },
  {
    id: "v3wm56dd",
    amount: 215,
    status: "failed",
    brand: "Fila",
    creator: "Oscar",
  },
  {
    id: "h6kl93ee",
    amount: 330,
    status: "success",
    brand: "Asics",
    creator: "Liam",
  },
  {
    id: "p9fr11ff",
    amount: 198,
    status: "in process",
    brand: "New Balance",
    creator: "Zoe",
  },
  {
    id: "y2sd75gg",
    amount: 410,
    status: "success",
    brand: "Converse",
    creator: "Ella",
  },
];

export const columns = [
  {
    accessorKey: "id",
    header: "Order Id",
    cell: ({ row }) => {
      return <div className="capitalize font-semibold">#{row.getValue("id")} </div>;
    },
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => {
      return <div className="capitalize"> {row.getValue("brand")} </div>;
    },
  },
  {
    accessorKey: "creator",
    header: "Creator",
    cell: ({ row }) => {
      return <div className="capitalize"> {row.getValue("creator")} </div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");

      let badgeClass = "bg-muted text-muted-foreground";
      if (status === "success") {
        badgeClass = "bg-green-100 text-green-600";
      } else if (status === "in process") {
        badgeClass = "bg-blue-100 text-blue-600";
      } else if (status === "cancelled" || status === "failed") {
        badgeClass = "bg-red-100 text-red-600";
      }

      return (
        <span
          className={`badge capitalize ${badgeClass} bg-success/10 text-success`}
        >
          {row.getValue("status")}
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
          <a
            aria-label="anchor"
            className="ti-btn btn-wave bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"
          >
            <EyeIcon size={16} />
          </a>
        </div>
      );
    },
  },
];

export function OrderTable() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={table.getColumn("email")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
