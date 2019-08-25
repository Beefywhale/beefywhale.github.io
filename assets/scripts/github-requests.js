function getRepos(username) {
  let headers = { Accept: "application/vnd.github.v3+json" };
  let baseURL = "https://api.github.com";
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    baseURL + "/users/" + username + "/repos?sort=created",
    true
  );
  request.setRequestHeader("Accept", headers.Accept);
  request.onload = () => {
    let json = JSON.parse(request.response);
    for (let i = 0; i < 6; i++) {
      let name = json[i]["name"];
      console.log(json[i]);
      let url = json[i]["html_url"];
      let desc = json[i]["description"];

      let repos = document.getElementById("repos");

      let newRepo = document.createElement("div");
      newRepo.className = "repo";
      repos.appendChild(newRepo);

      let title = document.createElement("a");
      title.className = "repo-name";
      title.href = url;
      title.text = name;
      newRepo.appendChild(title);

      let description = document.createElement("p");
      description.className = "repo-desc";
      description.textContent = desc;
      newRepo.appendChild(description);
    }
  };
  request.send();
}
getRepos("beefywhale");
