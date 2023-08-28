
import { useQuery } from 'react-query';
import { fetchNotesArchieved } from '../services/api';
import NoteItem from '../components/ui/NoteItem';

export const Archive = () => {
  const notesData = useQuery("archievenotes", fetchNotesArchieved);
  return (
    <>
      {notesData.isLoading || notesData.data?.length == 0 ? (
        <div className="min-h-screen min-w-full flex items-center justify-center text-2xl opacity-75 font-black ">
          Your Archieves will Appear here
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
    </>
  )
}

export default Archive
