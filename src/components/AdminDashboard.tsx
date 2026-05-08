import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutDashboard, FileCode, BookOpen, MessageSquare, LogOut, Plus } from 'lucide-react';
import { Project, BlogPost } from '@/types';

export function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-6">
        <Card className="max-w-md w-full bg-zinc-900 border-white/10 p-8 text-center rounded-none">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Access Denied</h2>
          <p className="text-zinc-400 mb-8">You do not have administrative privileges to access this area.</p>
          <Button variant="outline" className="w-full border-white/20 rounded-none" onClick={() => window.location.hash = '#'}>
            Return Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col pt-10">
        <div className="px-8 mb-10">
          <h1 className="text-xl font-bold tracking-tighter uppercase italic">EMERIC<span className="text-cyan-400">_</span>REAPER</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mt-1">Admin Panel</p>
        </div>

        <nav className="flex-grow space-y-2 px-4">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'projects', label: 'Projects', icon: FileCode },
            { id: 'blog', label: 'Blog Posts', icon: BookOpen },
            { id: 'messages', label: 'Messages', icon: MessageSquare },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-none text-sm font-medium transition-colors ${activeTab === item.id ? 'bg-cyan-500 text-black' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
           <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-400 transition-colors text-sm font-medium">
             <LogOut className="w-4 h-4" />
             Sign Out
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 overflow-y-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">{activeTab}</h2>
            <p className="text-zinc-500 text-sm mt-1">Management and moderation interface.</p>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black rounded-none">
            <Plus className="w-4 h-4 mr-2" /> Create New
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
           <Card className="bg-zinc-900/40 border-white/5 rounded-none">
             <CardHeader className="pb-2">
               <CardTitle className="text-xs uppercase tracking-widest text-zinc-500">Total Projects</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-4xl font-bold">12</p>
             </CardContent>
           </Card>
           <Card className="bg-zinc-900/40 border-white/5 rounded-none">
             <CardHeader className="pb-2">
               <CardTitle className="text-xs uppercase tracking-widest text-zinc-500">Blog Entries</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-4xl font-bold">24</p>
             </CardContent>
           </Card>
           <Card className="bg-zinc-900/40 border-white/5 rounded-none">
             <CardHeader className="pb-2">
               <CardTitle className="text-xs uppercase tracking-widest text-zinc-500">Unread Messages</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-4xl font-bold text-cyan-400">05</p>
             </CardContent>
           </Card>
        </div>

        {/* Content specific to tab would go here */}
        <div className="bg-zinc-900/20 border border-white/5 p-20 text-center">
            <p className="text-zinc-600 uppercase tracking-widest text-xs">Table view for {activeTab} is currently being initialized...</p>
        </div>
      </main>
    </div>
  );
}
