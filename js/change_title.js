 var OriginTitile = document.title,
                st;
            document.addEventListener("visibilitychange", function () {
                document.hidden ? (document.title = "再看一会~", clearTimeout(st)) : (document.title =
                    "感谢观看～", st = setTimeout(function () {
                        document.title = OriginTitile
                    }, 3e3))
            })