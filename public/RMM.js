var SCOPE;

function RMM($scope) {
	SCOPE=$scope;
	$scope.shared={};
	$s=$scope.shared;

	$s.playlists = []
	$s.activeList = undefined;
	$s.setActiveList = function (Id) {
		$s.activePlaylist=$s.getListById(Id) || $s.activeList;
	}

	$s.getListById = function (Id)
	{
		var i;
		for (i in $s.playlists) 
		{
			if ($s.playlists[i].Id === Id)
				return $s.playlists[i];
		}
		for (i in $s.genres)
		{
			if($s.genres[i].Id === Id)
				return $s.genres[i];
		}
		return false;
	}	

//	$scope.shared= {test:"k"}
//	$scope.Panel_left = "Panel_left.html";
//	$scope.Panel_right= "Panel_right.html";


	$s.playlists.push(new Playlist(1, "Nom1"), new Playlist(2, "Nom2"), new Playlist(3, "Nom3"));

	$s.t = function(){

	for (i =1;i<1000;i++) {
		$s.playlists.push(new Playlist(i, i, []));
	}
	return true;
	}
}

function Playlist(Id, Name, Musics) {
	this.Id=Id || -1 ;
	this.Name=Name || "Unamed";
	this.Musics=Musics || [];
	this.active= function() {
		return SCOPE.shared.activePlaylist === this;
	};
	this.setActiveList = function() {
		SCOPE.shared.setActiveList(this.Id);
	}
}

