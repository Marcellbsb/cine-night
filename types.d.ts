interface Item {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
  }
  interface Filme extends Item {
  
  }
  interface Serie extends Item {
  
  }
  interface Animation extends Item {
    id:integer;
    vote_average:integer;
  
  }