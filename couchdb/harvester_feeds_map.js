function(doc)
{
  if (doc.enclosures == null)
  {
    emit(doc.rss,
	 <feed>
	   <rss>{
	     doc.rss
	   }</rss>
	   <title>{
	     doc.title
	   }</title>
	   <link>{
	     doc.link
	   }</link>
	   <description>{
	     doc.description
	   }</description>
	 </feed>);
  }
}
