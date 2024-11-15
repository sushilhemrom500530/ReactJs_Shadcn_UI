import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

export default function useConfirmDialog() {
    const [dialogState, setDialogState] = useState({
        open: false,
        title: '',
        description: '',
        onConfirm: null,
        onCancel: null,
        confirmText: 'Confirm',
        cancelText: 'Cancel',
    });

    const confirm = ({
        title = 'Delete Confirmation',
        description = 'Are you sure you want to delete this item? This action cannot be undone.',
        confirmText = 'Delete',
        cancelText = 'Cancel',
        onConfirm,
        onCancel,
    } = {}) =>
        new Promise((resolve) => {
            setDialogState({
                open: true,
                title,
                description,
                onConfirm: () => {
                    resolve(true);
                    closeDialog();
                    if (onConfirm) onConfirm();
                },
                onCancel: () => {
                    resolve(false);
                    closeDialog();
                    if (onCancel) onCancel();
                },
                confirmText,
                cancelText,
            });
        });

    const closeDialog = () => {
        setDialogState({
            open: false,
            title: '',
            description: '',
            onConfirm: null,
            onCancel: null,
            confirmText: 'Confirm',
            cancelText: 'Cancel',
        });
    };

    const DialogComponent = dialogState.open && (
        <Dialog open={dialogState.open} onOpenChange={closeDialog}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {dialogState.title}
                    </DialogTitle>
                    <DialogDescription>
                        {dialogState.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-4">
                    <Button variant="outline" onClick={dialogState.onCancel}>
                        {dialogState.cancelText}
                    </Button>
                    <Button variant="destructive" onClick={dialogState.onConfirm}>
                        {dialogState.confirmText}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );

    return { confirm, DialogComponent };
}
