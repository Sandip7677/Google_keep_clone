
import { useQuery } from 'react-query';
import { fetchNotesdeleted } from '../services/api';
import NoteItem from '../components/ui/NoteItem';

const Trash = () => {
  const notesData = useQuery("deletednotes", fetchNotesdeleted);
  return (
    <>
      {notesData.isLoading || notesData.data?.length == 0 ? (
        <div className="min-h-screen min-w-full flex items-center justify-center text-2xl opacity-75 font-black ">
          Deleted Notes will Appear here
        </div>
      ) : (
        <div className="w-full flex flex-row justify-center flex-wrap gap-2 p-2 mt-5 ">
          {
            notesData.data?.map((item) => {
              return (
                <NoteItem key={item.note} value={item} />
              )
            })
          }
        </div>
      )}
    </>
  )
}

export default Trash