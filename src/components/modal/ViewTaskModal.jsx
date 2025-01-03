import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../ui/dialog";

function ViewTaskModal({ task, onClose,  isOpen }) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{task.title}</DialogTitle>
                    <DialogDescription>
                        {task.description || "No description available."}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default ViewTaskModal;
