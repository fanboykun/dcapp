import { writable } from 'svelte/store';

export const conversations = writable([]);
export const activeConversation = writable('');
