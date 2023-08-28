import React from 'react'
import NoteCreate from '../components/ui/NoteCreate'
import NoteItem from '../components/ui/NoteItem'
import { useQuery } from 'react-query';
import { fetchNotesReminder } from '../services/api';

const Reminder = () => {
  const notesData = useQuery("remindernotes", fetchNotesReminder);
  return (
    <>
      <div className="flex flex-col items-center pt-8">
        <div className="w-1/2">
          <NoteCreate />
        </div>
        {notesData.isLoading || notesData.data?.length == 0 ? (
          <div className="min-h-screen min-w-full flex items-center justify-center text-2xl opacity-75 font-black ">
            Your Reminder will Appear here
          </div>
        ) : (
          <div className="w-full flex flex-wrap gap-2 p-2 mt-5">
            {
              notesData.data?.map((item) => {
                return (
                  <NoteItem key={item.note} value={item} />
                )
              })
            }
          </div>
        )}
      </div>
    </>
  )
}

export default Reminder