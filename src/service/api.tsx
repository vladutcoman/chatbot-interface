import { API_URL } from "../constants/constants";

export function changePersonality(name: string) {
  return fetch(`${API_URL}/personality`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: name}),
  });
}

export function askQuestion(question: string, previousAnswer: string) {
  return fetch(`${API_URL}/ask`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: question,
      previousAnswer: previousAnswer
    }),
  });
}