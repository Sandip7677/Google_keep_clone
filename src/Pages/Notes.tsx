import React from 'react'
import NoteCreate from '../components/ui/NoteCreate'


function Notes() {
  return (
    <>
      <div className="flex flex-col items-center pt-8">
        <div className="w-1/2">
          <NoteCreate />
        </div>
        <div className="flex p-2">

        </div>
      </div>
    </>
  )
}

export default Notes