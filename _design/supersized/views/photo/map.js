function(doc){
  emit(doc.collection || null, {url: doc.url, image: doc.image, thumb: doc.thumb, title:doc.title})
}
