import React from 'react'
import { useQuery } from 'react-query';
import { fetchNotesdeleted } from '../services/api';
import NoteItem from '../components/ui/NoteItem';

const Trash = () => {
  const notesData = useQuery("deletednotes", fetchNotesdeleted);
  return (
    <div className="w-full flex flex-wrap gap-2 p-2 mt-5">
      {
        notesData.data?.map((item) => {
          return (
            <NoteItem key={item.note} value={item} />
          )
        })
      }
    </div>
  )
}

export default Trash