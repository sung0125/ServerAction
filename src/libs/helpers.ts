interface Topic {
  _id: string;
  title: string;
  description: string;
  createdAT: string;
  updateAdt: string;
}

export function convertDocToObj(doc: Topic) {
  return {
    _id: doc._id.toString(),
    title: doc.title,
    description: doc.description,
    createdAt: doc.createdAT || '',
    updateAt: doc.updateAdt || '',
  };
}
