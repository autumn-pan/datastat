class real {
    constructor(...val) {
        this.vals = val;
    }

    min() {
        let min = Number.MAX_VALUE;
        for(let i = 0; i < this.vals.length; i++)
        {
            if(this.vals[i] < min)
                min = this.vals[i]
        }
        return min;
    }

    max() {
        let max = -Number.MAX_VALUE;
        for(let i = 0; i < this.vals.length; i++)
        {
            if(this.vals[i] > max)
                max = this.vals[i]
        }
        return max;
    }

    range() {
        return this.max() - this.min();
    }

    sum() {
        let sum = 0;
        for(let i = 0; i < this.vals.length; i++)
            sum += this.vals[i];
        return sum;
    }

    mean() {
        return this.sum()/this.vals.length;
    }

    median() {
        if(this.vals.length % 2 == 1)
            return this.vals[Math.floor(this.vals.length/2)];
        return (this.valls[Math.floor(this.vals.length/2)] + this.vals[Math.ceil(this.vals.length/2)])/2;
    }

    
}