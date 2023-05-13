# ashcl0ud712_platform
ashcl0ud712 Platform repository

## Homework 1
### Вопросы
1. Разберитесь, почему поды рестарнулись:
    * coredns - входит в ReplicaSet, проверить можно: ```kubectl describe pod coredns-787d4945fb-f9mqz -n kube-system | grep Controlled```
    * kube-proxy - входит в DaemonSet, что значит, что он должен быть на всех или определенных нодах. Проверить можно - ``` kubectl describe pod kube-proxy-7n52g -n kube-system | grep Controlled```
    * Все остальные поды - это Static Pods, которые управляются kubelet-ом напрямую, а не Control Plane-ом.

### Задания
1. Собрал поверх nodejs сервер для статичных файлов
2. Написал к нему манифест
3. Он работает

Hipster-shop
* Собрал докер-образ фронта
* Поднял его манифестом
