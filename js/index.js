var mesmer = {
    profession: "mesmer",
    main: "sword",
    wield: function() {
        return "The " + this.profession + " wields his " + this.main + "!<br />";
    }
};

document.write(mesmer.wield());

mesmer.offhand = "pistol";
mesmer.offWield = function() {
    return "Now the " + this.profession + " wields his " + this.offhand + "!";
};

document.write(mesmer.offWield());