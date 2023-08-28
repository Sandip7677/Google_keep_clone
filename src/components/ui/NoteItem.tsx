import { useState } from 'react'
import { Card, CardContent, CardFooter } from './card'
import { Archive, ArchiveRestore, Trash2 } from 'lucide-react';
import { Button } from './button';
import { deleteItem, updateItem } from '../../services/api';
import { useMutation } from 'react-query';

const NoteItem = ({ value }: any) => {
    const [archtoogler, setArchtoogler] = useState(!(value.is_archived));
    const [deltoogler, setDeltoogler] = useState(!(value.is_deleted));

    const mutation = useMutation(updateItem);
    const mutationDelete = useMutation(deleteItem);
    const archivehandler = () => {
        const item = { is_archived: true }
        const id = value.id;
        mutation.mutate({ item, id });
    }
    const unarchivehandler = () => {
        const item = { is_archived: false }
        const id = value.id;
        mutation.mutate({ item, id });
    }
    const deleteHandler = () => {
        const item = { is_deleted: true }
        const id = value.id;
        mutation.mutate({ item, id });
    }

    const onDelete = () => {
        const id = value.id;
        mutationDelete.mutate(id);
    }
    const onRestore = () => {

    }
    return (
        <>
            <Card className="min-width-card min-height-card hover:shadow-lg">
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
            </Card>
        </>
    )
}

export default NoteItem