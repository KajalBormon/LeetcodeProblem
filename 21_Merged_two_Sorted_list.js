/* -----------------Practice Code-----General way to sort the list----- */
/* const list1 = [1,2,4];
const list2 = [1,3,4]; */

/* const list1 =[];
const list2 = [0]

const list3 = list1.concat(list2);

const list = list3.sort();

console.log(list); */



/* ----------Leet Code---------- */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let current = new ListNode();
    const dummy = current;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1) {
        current.next = list1;
    }
    if (list2) {
        current.next = list2;
    }
    return dummy.next;
};


/* --------------Recursion way to solve it--------- */
/* var mergeTwoLists = function (l1, l2) {
    // If either list is empty, return the other list's node
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    // If l1 is lower
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    // If l2 is lower
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}; */

