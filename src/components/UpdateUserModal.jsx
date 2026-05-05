'use client';

import { authClient } from '@/lib/auth-client';
import { BiEdit, BiUser } from 'react-icons/bi';

export function UpdateUserModal() {
  const onSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <>
      <button
        onClick={() => document.getElementById('update_modal').showModal()}
        className="btn btn-sm bg-amber-600 hover:bg-amber-700 border-none text-white gap-2 px-6"
      >
        <BiEdit className="text-lg" /> Update Profile
      </button>

      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#243b44] border border-slate-700 shadow-2xl p-0 overflow-hidden">
          <div className="bg-[#1a2e35] p-6 flex items-center gap-4 border-b border-slate-700">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
              <BiUser size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Update Profile</h3>
              <p className="text-xs text-slate-400">
                Modify your account details
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-6 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-200 font-bold">
                  Full Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input bg-[#1a2e35] border-slate-600 text-slate-200 focus:border-amber-500 w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-200 font-bold">
                  Image URL
                </span>
              </label>
              <input
                name="image"
                type="url"
                placeholder="https://example.com"
                className="input bg-[#1a2e35] border-slate-600 text-slate-200 focus:border-amber-500 w-full"
                required
              />
            </div>

            <div className="modal-action gap-3 pt-4">
              <button
                type="button"
                onClick={() => document.getElementById('update_modal').close()}
                className="btn btn-ghost text-slate-400 hover:bg-slate-700/30"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => document.getElementById('update_modal').close()}
                className="btn bg-amber-600 hover:bg-amber-700 border-none text-white px-8"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <form
          method="dialog"
          className="modal-backdrop bg-black/60 backdrop-blur-sm"
        >
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
