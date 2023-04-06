# List of Patterns

| No. | Type         | Name                     |   x |   y |
| :-- | ------------ | ------------------------ | --: | --: |
| 1   | `Creational` | Singleton Pattern        |   1 |   4 |
| 2   | `Creational` | Simple Factory Pattern   |   2 |   3 |
| 3   | `Creational` | Factory Methods Pattern  |   2 |   5 |
| 4   | `Creational` | Abstract Factory Pattern |   4 |   5 |
| 5   | `Creational` | Prototype Pattern        |   3 |   4 |
| 6   | `Creational` | Builder Pattern          |   4 |   2 |
| 7   | `Structural` | Proxy Pattern            |   3 |   4 |
| 8   | `Structural` | Facade Pattern           |   1 |   5 |
| 9   | `Structural` | Adapter Pattern          |   2 |   4 |
| 10  | `Structural` | Composite Pattern        |   3 |   4 |
| 11  | `Structural` | Decorator Pattern        |   3 |   3 |
| 12  | `Behavioral` | Strategy Pattern         |   1 |   4 |
| 13  | `Behavioral` | Observer Pattern         |   3 |   5 |
| 14  | `Behavioral` | Iterator Pattern         |   3 |   5 |
| 15  | `Behavioral` | Command Pattern          |   3 |   4 |
| 16  | `Behavioral` | Template Method Pattern  |   2 |   3 |
| 17  | `Behavioral` | Memento Pattern          |   2 |   2 |

## Description of `Strategy Pattern`

```
/**
 * @param {*} originalPriced
 * returns
 */
function dayPrice(originalPriced){
     return originalPriced * 0.6
}

const getPriceStrategy = {
     dayPrice: dayPrice
}

console.log(getPriceStrategy[typePromotion](originalPriced))
```

## Description of `Observer Pattern`

> Observer pattern is a supers pattern

```

```

### `Pull Model`

**Nhược điểm**:

Nếu có n đối tượng cần gửi n request.

Thời gian chờ đợi render ra new feed thì lâu.

**Ưu điểm**:

Khi đối tượng sinh ra một event chỉ cần lưu event vào database của đối tượng đó.

### `Push Model`

**Ưu điểm**:

Sẵn có dữ liệu đã được database

**Nhược điểm**

Tỷ lệ ghi cao, có n event sẽ có n bản ghi

Tốc độ nhận của đối tượng pull sẽ chậm hơn dối tượng khác
