import React, { useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function AddTaskModal({ addNewTask }) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required.";
        if (!description.trim()) newErrors.description = "Description is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            // Add the new task and reset the form
            addNewTask({ title, description });
            setTitle("");
            setDescription("");
            setErrors({});
            setIsOpen(false); // Close the dialog
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <Button  >Add New Task</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="pb-6">Add New Task</DialogTitle>

                    {/* Title Input */}
                    <Label className="pb-1">Title</Label>
                    <Input
                        placeholder="Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={errors.title ? "border-red-500" : ""}
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

                    {/* Description Input */}
                    <Label className="pt-2 pb-1">Description</Label>
                    <Textarea
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={errors.description ? "border-red-500" : ""}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm">{errors.description}</p>
                    )}
                </DialogHeader>

                <DialogFooter>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default AddTaskModal;
