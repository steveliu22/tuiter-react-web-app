function WhoToFollowListItem (who) {
  return (`                    
    <li class="list-group-item">
    <div class="row align-items-center">
        <div class="col-2">
            <img class="float-start rounded-circle" src="${who.avatarIcon}" width="50px"
                height="50px">
        </div>
        <div class="col-6 pl-1">
            <div>
                <h6 class="fw-bolder"> ${who.userName} <i class="fas fa-check-circle"></i>
            </div>
            <div>
                <h6 class="fw-normal"> ${'@' + who.handle}
            </div>
        </div>

        <div class="col-4">
            <button type="button"
                class="btn btn-primary rounded-pill w-30 float-end">Follow</button>
        </div>
    </div>
</li>`)
}

export default WhoToFollowListItem
