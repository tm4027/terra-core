import React from 'react';

import ArticleCard from '../../../terra-article/lib/ArticleCard';

let abstract = "Taco Tomato Feelsbadman Taco Tomato Feelsbadman Taco Tomato Feelsbadman Taco Tomato Feelsbadman Taco Tomato Feelsbadman Taco Tomato Feelsbadman Taco Tomato Feelsbadman Taco Tomato Feelsbadman Taco Tomato Feelsbadman.";
let picture = "https://upload.wikimedia.org/wikipedia/commons/2/24/Junonia_orithya-Thekkady-2016-12-03-001.jpg";

const stuffToShow = <div>
						          <ArticleCard image={picture} headline={"This Is A Test - ArticleCard"} abstract={abstract} link={"http://www.google.com"} isFeatured={false} />;
                      <ArticleCard image={picture} headline={"This Is A Test - ArticleCard"} abstract={abstract} link={"http://www.google.com"} isFeatured={true} />;
					          </div>

export default () => stuffToShow;
