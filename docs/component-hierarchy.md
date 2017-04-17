## Component Hierarchy

**Bolded** components are associated with routes.
  `(Errors Component to be nested in all forms)`

* **SplashPage**
  * SignUpForm
  * SignInForm


* **MainPage**
  * Navbar
    * UserDropdown
      * FormModal
        * EditUserForm
  <!-- * CheckinForm -->
  * CheckinIndex (Add own route?)
    * CheckinIndexItem
      * Toasts
      * CommentIndex
        * CommentIndexItem
    * FormModal
      * CommentsForm
  * UserProfileItem
  * EventsIndex
    * EventsIndexItem
  * Wishlist

  * **UserShow**
    * Navbar ?
    * UserProfileItem
    * FormModal
      * EditUserForm
    * CheckinIndex
      * CheckinIndexItem
    * Wishlist
    * UserLikes

  * **BeerBreweriesTab**
    * Navbar ?
    * BeersIndex
      * BeerIndexItem
      * CheckinForm
      * EditBeerForm
      * AddBeerForm
    * BreweriesIndex
      * BreweryIndexItem
      * BreweryLikes
      * FormModal
        * EditBreweryForm
      * FormModal  
        * AddBreweryForm

  * **BeerShow**
    * Navbar ?
    * BeerIndexItem
    * CheckinForm
    * EditBeerForm
    * CheckinIndex
      * CheckinIndexItem
        * Toasts
        * CommentIndex
          * CommentIndexItem
      * FormModal    
        * CommentsForm
      * FormModal  
        * CheckinForm
      * FormModal
        * EditBeerForm

  * **BreweryShow**
    * Navbar ?
    * BreweryIndexItem
      * BreweryLikes
    * FormModal
      * EditBreweryForm
    * CheckinIndex
      * CheckinIndexItem
        * Toasts
        * CommentIndex
          * CommentIndexItem
      * FormModal    
        * CommentsForm


## Routes

* **component:** `App` **path:** `/`
  * `IndexRoute to:` **component:** `SplashPage (needs not logged in)`
  * **component:** `UserShow` **path:** `users/:userId`
  * **component:** `BeersBreweriesTab` **path:** `display`
    * **component:** `BeersIndex` **path:** `display/beers (? or rendered under tab)`
    * **component:** `BreweriesIndex` **path:** `display/breweries (? or rendered under tab)`
  * **component:** `BeerShow` **path:** `beers/:beerId`
  * **component:** `BreweryShow` **path:** `brewery/:breweryId`
