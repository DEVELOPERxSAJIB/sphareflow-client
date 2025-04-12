import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AdminSidebar } from "../Admin/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
