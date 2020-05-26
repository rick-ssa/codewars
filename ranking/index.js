function User() {
    var ranks = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8]
    this.rank = -8
    this.progress = 0
    this.incProgress = (rankProgress) => {
        if(!isValidRank(rankProgress)) 
            throw {errorNo: 400, errorMessage: 'Rank not found'}

        let actualRankIndex = turnRankIntoIndex(this.rank)
        let rankProgressIndex = turnRankIntoIndex(rankProgress)

        if(actualRankIndex > rankProgressIndex) {
            this.progress = actualRankIndex - rankProgressIndex === 1 ? incRank(this.progress+1) : this.progress
        } else if(actualRankIndex < rankProgressIndex) {
            this.progress = incRank(this.progress + (10 * Math.pow(rankProgressIndex - actualRankIndex, 2)))
        } else {
            this.progress = incRank(this.progress + 3)
        }

    }

    const isValidRank = rank => {
        return ranks.some(value=>value===rank)
    }

    const turnRankIntoIndex = rank => {
        return ranks.reduce((result,value,index)=>{
            if(rank === value) {
                result = index
            }
            return result
        },0)
    }

    const incRank = (value) => {
        let rankByProgressIndex = turnRankIntoIndex(this.rank) + Math.floor(value / 100)
        this.rank = ranks[rankByProgressIndex]
        if(!this.rank) {
            this.rank = 8
            return 0
        }

        return value % 100
    }
}


//test *******************

let user = new User()
user.incProgress(-8)

console.log(user.rank, user.progress)