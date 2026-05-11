import { Check, MoreHorizontal, Plus, Shield, X } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusBadge } from "@/components/charts/StatusBadge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { activityLog, users } from "@/data/users";
import { ROLE_STYLES } from "@/lib/constants";

const permissions = [
  "View Dashboard",
  "Edit Criteria",
  "Approve Documents",
  "Generate Reports",
  "Manage Users",
  "Run AI Analysis",
  "Change Settings",
  "Export Evidence"
];

const roles = [
  { role: "Admin", count: 1, summary: ["Full workspace administration", "Manage users and roles", "Generate and approve reports"] },
  { role: "Coordinator", count: 5, summary: ["Verify criterion evidence", "Resolve assigned gaps", "Approve faculty submissions"] },
  { role: "Faculty", count: 7, summary: ["Enter criterion data", "Upload evidence", "View assigned actions"] },
  { role: "Auditor", count: 2, summary: ["Read-only review access", "Comment on reports", "Export audit trail"] }
];

const allowed: Record<string, string[]> = {
  Admin: permissions,
  Coordinator: ["View Dashboard", "Edit Criteria", "Approve Documents", "Generate Reports", "Run AI Analysis", "Export Evidence"],
  Faculty: ["View Dashboard", "Edit Criteria", "Export Evidence"],
  Auditor: ["View Dashboard", "Generate Reports", "Export Evidence"]
};

export function Users() {
  return (
    <div className="space-y-8">
      <PageHeader title="Users & Roles" subtitle="Manage accreditation workspace access, permissions, and recent activity." actions={<InviteUserDialog />} />

      <Tabs defaultValue="users">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="activity">Activity Log</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card className="overflow-hidden">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  {["Name", "Email", "Role", "Department", "Last Active", "Status", "Actions"].map((header) => (
                    <th key={header} className="px-4 py-3">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user) => (
                  <tr key={user.email} className="transition hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-3 font-medium text-slate-900">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{user.name.replace("Dr. ", "").replace("Prof. ", "").slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        {user.name}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{user.email}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${ROLE_STYLES[user.role]}`}>{user.role}</span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{user.department}</td>
                    <td className="px-4 py-3 text-slate-600">{user.lastActive}</td>
                    <td className="px-4 py-3">
                      <StatusBadge label={user.status} />
                    </td>
                    <td className="px-4 py-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Reset password</DropdownMenuItem>
                          <DropdownMenuItem>Suspend</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <section className="grid grid-cols-2 gap-6">
            {roles.map((role) => (
              <Card key={role.role} className="p-6 hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-slate-950">{role.role}</h3>
                    <p className="mt-1 text-sm text-slate-500">{role.count} users assigned</p>
                  </div>
                  <div className="rounded-lg bg-primary-soft p-2 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {role.summary.map((line) => (
                    <li key={line} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-500" />
                      {line}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-5">
                  Edit Role
                </Button>
              </Card>
            ))}
          </section>
        </TabsContent>

        <TabsContent value="permissions">
          <Card className="overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Permission</th>
                  {roles.map((role) => (
                    <th key={role.role} className="px-4 py-3 text-center">
                      {role.role}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {permissions.map((permission) => (
                  <tr key={permission} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">{permission}</td>
                    {roles.map((role) => {
                      const yes = allowed[role.role].includes(permission);
                      return (
                        <td key={role.role} className="px-4 py-3 text-center">
                          {yes ? <Check className="mx-auto h-4 w-4 text-emerald-500" /> : <X className="mx-auto h-4 w-4 text-slate-300" />}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="p-6">
            <div className="space-y-5">
              {activityLog.map((activity, index) => (
                <div key={activity} className="relative flex gap-4 pl-2">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div className="border-b border-slate-100 pb-4">
                    <p className="text-sm font-medium text-slate-900">{activity}</p>
                    <p className="mt-1 text-xs text-slate-500">{index + 1} hrs ago</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function InviteUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4" />
          Invite User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite User</DialogTitle>
          <DialogDescription>Send an accreditation workspace invitation with the correct role.</DialogDescription>
        </DialogHeader>
        <div className="mt-5 grid gap-4">
          <Input placeholder="Full name" />
          <Input placeholder="Email address" type="email" />
          <Select defaultValue="Faculty">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Coordinator">Coordinator</SelectItem>
              <SelectItem value="Faculty">Faculty</SelectItem>
              <SelectItem value="Auditor">Auditor</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => toast.success("Invitation sent")}>Send Invitation</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
