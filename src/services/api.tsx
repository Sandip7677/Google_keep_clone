
import { supabase } from "../Auth/loginApi";

export type nData = {
  id?: number,
  user_id: string | undefined,
  inserted_at?: string,
  updated_at?: string,
  note: string,
  is_archived?: boolean,
  is_reminder?: boolean,
  reminder_time?: string,
  is_deleted?: boolean,
}


//fetch user

export const getUser = async () => {
  const user = await supabase.auth.getUser();
  const userData = user.data.user;
  return userData
}


//create note

export const createNote = async (noteData: nData) => {
  const { data, error } = await supabase.from('notes').insert([noteData]);
  if (error) {
    // throw new Error(error.message);
    console.log(error.message)
  }
  return data;
};

//fetch all notes data

export const fetchNotes = async () => {
  const userId = await getUser();
  const { data } = await supabase
    .from('notes')
    .select("*")
    .eq('user_id', userId?.id)
    .eq("is_archived", "false")
    .eq("is_deleted", "false")

  return data
};

// fetch reminder notes

export const fetchNotesReminder = async () => {
  const userId = await getUser();
  const { data } = await supabase
    .from('notes')
    .select("*")
    .eq('user_id', userId?.id)
    .eq("is_reminder", "true")

  return data
};

//fetch archieved notes

export const fetchNotesArchieved = async () => {
  const userId = await getUser();
  const { data } = await supabase
    .from('notes')
    .select("*")
    .eq('user_id', userId?.id)
    .eq("is_archived", "true")

  return data
};

export const fetchNotesdeleted = async () => {
  const userId = await getUser();
  const { data } = await supabase
    .from('notes')
    .select("*")
    .eq('user_id', userId?.id)
    .eq("is_deleted", "true")

  return data
};

//updated notes
export const updateItem = async ({ item, id }: any) => {
  const userId = await getUser();

  const { error } = await supabase
    .from('notes')
    .update(item)
    .eq("user_id", userId?.id)
    .eq("id", id); //matching id of row to update

  if (error) console.log(error);


};

// delete a note

export const deleteItem = async (id: string) => {

  const userId = await getUser();

  const { error } = await supabase
    .from("notes")
    .delete() //delete the row
    .eq("id", id) //the id of row to delete
    .eq("user_id", userId?.id) //check if the item being deleted belongs to the user

  if (error) console.log(error);


};
