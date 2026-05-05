'use client';

import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#1a2e35] px-4 py-10">
      <div className="card w-full max-w-sm bg-[#243b44] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-700/50 rounded-2xl overflow-hidden">
        <div className="card-body items-center text-center p-10">
          <div className="avatar placeholder mb-6">
            <div className="ring-amber-500 ring-offset-[#1a2e35] w-24 rounded-full ring-2 ring-offset-4 overflow-hidden bg-amber-600 text-white">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name || 'User profile'}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-3xl font-black">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-white tracking-tight">
              {user?.name}
            </h2>
            <p className="text-slate-400 text-sm font-medium">{user?.email}</p>
          </div>

          <div className="divider before:bg-slate-700 after:bg-slate-700 my-6"></div>

          <div className="w-full">
            <UpdateUserModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
