import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import * as Dialog from '@radix-ui/react-dialog';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mb-4 flex justify-end">
                    <Dialog.Root>
                        <Dialog.Trigger className="rounded bg-purple-600 px-4 py-2 text-white shadow">Create Post</Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-6 shadow">
                                <Dialog.Title className="mb-4 text-lg font-bold">Create New Post</Dialog.Title>

                                {/* Example form */}
                                <form>
                                    <input type="text" placeholder="Title" className="mb-4 w-full border px-2 py-1" />
                                    <textarea placeholder="Body" className="mb-4 w-full border px-2 py-1" />
                                    <button type="submit" className="rounded bg-purple-600 px-4 py-2 text-white">
                                        Save
                                    </button>
                                </form>

                                <Dialog.Close className="absolute top-2 right-2">❌</Dialog.Close>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>
            </div>
        </AppLayout>
    );
}
