import { useAuth } from '../lib/AuthContext';
import { AdminDashboard } from '../components/AdminDashboard';
import { Link } from 'react-router-dom';

export function Admin() {
  const { user, login } = useAuth();

  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center p-6 bg-[#050505]">
        <div className="max-w-md w-full p-10 bg-[#080808] border border-[#1A1A1A] text-center technical-border">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest italic">Admin Access</h2>
          <p className="text-zinc-500 mb-10 text-[10px] system-label lowercase">
            authorized personnel only. authentication required for system configuration.
          </p>
          <button 
            onClick={login}
            className="w-full bg-brand-cyan text-black py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-cyan-400 transition-colors system-label"
          >
            Authenticate via Google
          </button>
          <Link 
            to="/" 
            className="mt-6 inline-block text-zinc-600 text-[8px] uppercase tracking-widest hover:text-brand-cyan transition-colors"
          >
            Return to Public Node
          </Link>
        </div>
      </div>
    );
  }

  return <AdminDashboard />;
}
