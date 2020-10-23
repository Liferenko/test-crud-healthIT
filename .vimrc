if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin('~/.vim/plugged')

    " 1.11.19 - I'm starting to use static type checker in Python 3.* (source - https://mypy.readthedocs.io/en/latest/getting_started.html#installing-and-running-mypy)
    ""Plug 'dense-analysis/ale'

    " Elixir plugin
    Plug 'elixir-editors/vim-elixir'
    "
    " Plugin outside ~/.vim/plugged with post-update hook
    Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': { -> fzf#install() } }
    Plug 'junegunn/fzf.vim'

    " Clojure + REPL
    Plug 'rhysd/reply.vim', { 'on': ['Repl', 'ReplAuto'] }


    " Multiple Plug commands can be written in a single line using | separators
    ""Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

    " Plugin options
    ""Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }


    " Initialize plugin system
call plug#end()


set fileencodings=utf-8,cp1251,koi8-r,cp866
syntax on
" Размер табулации по умолчанию

set shiftwidth=4
set softtabstop=4
set tabstop=8
set bs=2 " без этого бекспейс будет жутко криво работать
set nonu nu
"set foldcolumn=2 " Левая колонка фолдинга
"set foldenable
set incsearch " Поиск по набору текста

" A proper view of Netrw (vim Explorer tree)
let g:netrw_liststyle = 3
let g:netrw_browse_split = 0
let g:netrw_winsize = 50

set expandtab " Преобразование Таба в пробелы
set autoindent " Включить автоотступы
set showmode " показывает в каком режиме работаешь
set ignorecase "игнорировать прописные/строчные при поиске
set hlsearch "при поиске помечать все найденные строки
" colorscheme codedark

" Ctags
set tags=tags

" Двойное нажатие // запускает поиск по выделенному тексту
vnoremap // y/<C-R>"<CR>

" Esc to kj
imap kj <Esc>

" Autocomplete brackets
inoremap " ""<left>
inoremap ' ''<left>
inoremap ( ()<left>

inoremap <! <!--  --><left><left><left><left>
inoremap < <><left>
inoremap <% <%=  %><left><left><left>
inoremap [ []<left>
inoremap {<CR> {<CR>}<ESC>O
inoremap {;<CR> {<CR>};<ESC>O
inoremap { {}<left>


" Выключаем надоедливый "звонок"
set novisualbell
set dir=~/.vim " Все swap файлы будут помещаться в эту папку; ну их нафиг
set visualbell " Включает виртуальный звонок (моргает, а не бибикает при
" ошибках)

" " Fix arrow keys that display A B C D on remote shell:
" " Use Vim settings, rather then Vi settings (much better!).
" " This must be first, because it changes other options as a side effect.
set nocompatible
