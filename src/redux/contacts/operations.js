import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      toast.error('Oops! Something went wrong.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      toast.success('Successfully created!');
      return response.data;
    } catch (e) {
      toast.error('Oops! Something went wrong.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Successfully deleted!');
      return response.data;
    } catch (e) {
      toast.error('Oops! Something went wrong.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// UPDATE @ /contacts/:id
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, thunkAPI) => {
    const { id, name, number } = contact;
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success('Successfully modified!');
      return response.data;
    } catch (e) {
      toast.error('Oops! Something went wrong.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
