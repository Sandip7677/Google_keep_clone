import { useState } from 'react'
import { Card, CardContent, CardFooter } from './card'
import { Archive, ArchiveRestore, Trash2 } from 'lucide-react';
import { Button } from './button';
import { deleteItem, updateItem } from '../../services/api';
import { useMutation } from 'react-query';
import { queryClient } from "../../main"

const NoteItem = ({ value }: any) => {
    const [archtoogler, setArchtoogler] = useState(!(value.is_archived));
    const [deltoogler, setDeltoogler] = useState(!(value.is_deleted));

    const mutationArchieve = useMutation(updateItem, {
        onSettled: () => {
            queryClient.invalidateQueries('archievenotes');
            queryClient.invalidateQueries('notes');
        },
    });
    const mutation = useMutation(updateItem, {
        onSettled: () => {
            queryClient.invalidateQueries('deletednotes');
            queryClient.invalidateQueries('notes');

        },
    });

    const mutationDelete = useMutation(deleteItem, {
        onSettled: () => {
            queryClient.invalidateQueries('deletednotes');
        },
    });

    const archivehandler = () => {
        const item = { is_archived: true }
        const id = value.id;
        mutationArchieve.mutateAsync({ item, id });
    }
    const unarchivehandler = () => {
        const item = { is_archived: false }
        const id = value.id;
        mutationArchieve.mutateAsync({ item, id });
    }

    const deleteHandler = () => {
        const item = { is_deleted: true }
        const id = value.id;
        mutation.mutateAsync({ item, id });
    }
    const onRestore = () => {
        const item = { is_deleted: false }
        const id = value.id;
        mutation.mutateAsync({ item, id });
    }

    const onDelete = () => {
        const id = value.id;
        mutationDelete.mutateAsync(id);
    }


    return (
        <>
            <Card className="min-width-card min-height-card hover:shadow-lg">
                {mutationDelete.isLoading || mutation.isLoading || mutationArchieve.isLoading ? <div className="h-full w-full flex justify-center items-center text-xl font-bold">
                    {mutationDelete.isLoading ? "Deleting..." : "Updating..."}

                </div> : (
                    <>
                        <CardContent className='text-lg'>
                            {value.note}
                        </CardContent>
                        <CardFooter className='items-center'>
                            {value.reminder_time && <div className="p-1 border rounded mr-20">
                                {value.reminder_time.substring(11, 19)}
                            </div>}
                            <div className="flex gap-x-5">
                                {(value.is_deleted) == false &&
                                    (archtoogler ?
                                        (<Archive size={18} onClick={() => {
                                            setArchtoogler(false);
                                            archivehandler();
                                        }} />) :
                                        (<ArchiveRestore size={18} onClick={() => { setArchtoogler(true); unarchivehandler(); }} />))}
                                {(value.is_deleted) == false && (deltoogler ? (<Trash2 size={18} onClick={() => { setDeltoogler(false); deleteHandler(); }} />) : (""))}
                                {(value.is_deleted) == true && (<Button onClick={onDelete}>Delete</Button>)}
                                {(value.is_deleted) == true && (<Button onClick={onRestore}>Restore</Button>)}
                            </div>


                        </CardFooter>
                    </>
                )}
            </Card>
        </>
    )
}

export default NoteItem