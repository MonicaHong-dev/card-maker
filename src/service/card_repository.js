import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }
  //cards를 userId별로 가져옴
  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }
  saveCard(userId, card) {
    console.log("this.db?", this.db);
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
  removeCard(userId, card) {
    const cardRef = ref(this.db, `${userId}/cards/${card.id}`);
    remove(cardRef);
  }
}

export default CardRepository;
