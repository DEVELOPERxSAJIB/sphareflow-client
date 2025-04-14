import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, EyeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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

const data = [
  {
    id: "1",
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@example.com",
    emailVerified: true,
    lastActivity: "2025-04-10T14:30:00Z",
    deletedAt: null,
    role: "ugc_creator",
  },
  {
    id: "2",
    firstName: "Liam",
    lastName: "Walker",
    email: "liam.walker@example.com",
    emailVerified: false,
    lastActivity: "2025-04-08T10:15:00Z",
    deletedAt: null,
    role: "brand",
  },
  {
    id: "3",
    firstName: "Ava",
    lastName: "Martinez",
    email: "ava.martinez@example.com",
    emailVerified: true,
    lastActivity: "2025-04-11T18:45:00Z",
    deletedAt: "2025-04-06T16:00:00Z",
    role: "ugc_creator",
  },
  {
    id: "4",
    firstName: "Noah",
    lastName: "Lee",
    email: "noah.lee@example.com",
    emailVerified: false,
    lastActivity: "2025-04-09T13:00:00Z",
    deletedAt: null,
    role: "admin",
  },
  {
    id: "5",
    firstName: "Isabella",
    lastName: "Hughes",
    email: "isabella.hughes@example.com",
    emailVerified: true,
    lastActivity: "2025-04-10T09:20:00Z",
    deletedAt: null,
    role: "ugc_creator",
  },
  {
    id: "6",
    firstName: "James",
    lastName: "Nguyen",
    email: "james.nguyen@example.com",
    emailVerified: true,
    lastActivity: "2025-04-07T21:35:00Z",
    deletedAt: "2025-04-06T16:00:00Z",
    role: "brand",
  },
  {
    id: "7",
    firstName: "Sophia",
    lastName: "Patel",
    email: "sophia.patel@example.com",
    emailVerified: false,
    lastActivity: "2025-04-11T07:50:00Z",
    deletedAt: null,
    role: "ugc_creator",
  },
  {
    id: "8",
    firstName: "William",
    lastName: "Baker",
    email: "william.baker@example.com",
    emailVerified: true,
    lastActivity: "2025-04-12T12:10:00Z",
    deletedAt: "2025-04-06T16:00:00Z",
    role: "admin",
  },
  {
    id: "9",
    firstName: "Mia",
    lastName: "Turner",
    email: "mia.turner@example.com",
    emailVerified: true,
    lastActivity: "2025-04-06T16:00:00Z",
    deletedAt: "2025-04-06T16:00:00Z",
    role: "ugc_creator",
  },
];

export const columns = [
  {
    accessorKey: "id",
    header: "Order Id",
    cell: ({ row }) => {
      return (
        <div className="capitalize font-semibold">#{row.getValue("id")} </div>
      );
    },
  },
  {
    id: "name",
    header: "Name",
    cell: ({ row }) => {
      const firstName = row.original.firstName;
      const lastName = row.original.lastName;
      return (
        <div className="capitalize">
          {firstName} {lastName}
        </div>
      );
    },
  },
  {
    accessorKey: "lastActivity",
    header: "Last Activity",
    cell: ({ row }) => {
      return (
        <div className="capitalize">
          {" "}
          {row.getValue("lastActivity").slice(0, 10)}{" "}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <div className="capitalize"> {row.getValue("email")} </div>;
    },
  },
  {
    accessorKey: "emailVerified",
    header: "Verified",
    cell: ({ row }) => {
      const isVerifyed = row.getValue("emailVerified");

      let badgeClass = "bg-muted text-muted-foreground";
      if (isVerifyed === true) {
        badgeClass = "bg-green-100 text-green-600";
      } else if (isVerifyed === false) {
        badgeClass = "bg-red-100 text-red-600";
      }

      return (
        <span
          className={`badge capitalize ${badgeClass} bg-success/10 text-success`}
        >
          {isVerifyed ? "Verifyed" : "Unverifyed"}
        </span>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("role")}</div>;
    },
  },
  {
    accessorKey: "deletedAt",
    header: "Deleted At",
    cell: ({ row }) => {
        const deletedAt = row.getValue("deletedAt");
      
        const isDeleted = deletedAt === null
          ? "Activate User"
          : String(deletedAt).slice(0, 10);
      
        const bgColor =
          deletedAt === null
            ? "bg-green-100 text-green-600 inline"
            : "bg-red-100 text-red-600 inline";
      
        return <div className={`font-medium px-2 py-1 rounded ${bgColor}`}>{isDeleted}</div>;
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

export function AllUsersTable() {
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
