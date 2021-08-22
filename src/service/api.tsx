import { API_URL } from "../constants/constants";
import { PUTAskRequest, PUTPersonalityRequest } from "../types/types";

export function changePersonality(body: PUTPersonalityRequest) {
  return fetch(`${API_URL}/personality`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function askQuestion(body: PUTAskRequest) {
  return fetch(`${API_URL}/ask`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
