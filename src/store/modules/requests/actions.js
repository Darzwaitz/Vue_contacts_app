export default {
  async contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-coach-app-7b128-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    newRequest.id = responseData.name;

    context.commit('addRequest', newRequest);
  },
};
