import { FutureInstance } from 'fluture'

declare module 'fluture-retry' {
  export type RetryStrategy = (initialRetryTime: number) => number

  export function retryLinearly <E, R>(task: FutureInstance<E, R>): FutureInstance<E, R>

  export function retry (strategy: RetryStrategy): (countTries: number) => <E, R>(task: FutureInstance<E, R>) => FutureInstance<E[], R>
  export function retry (strategy: RetryStrategy, countTries: number): <E, R>(task: FutureInstance<E, R>) => FutureInstance<E[], R>
  export function retry (strategy: RetryStrategy): (countTries: number) => <E, R>(task: FutureInstance<E, R>) => FutureInstance<E[], R>
  export function retry <E, R>(strategy: RetryStrategy, countTries: number, task: FutureInstance<E, R>): FutureInstance<E[], R>

  export function exponentially (multiplier: number): RetryStrategy
  export function exponentially (multiplier: number, initialRetryTime: number): number

  export function linearly (multiplier: number): RetryStrategy
  export function linearly (multiplier: number, initialRetryTime: number): number

  export function linearly (multiplier: number): RetryStrategy
  export function linearly (multiplier: number, initialRetryTime: number): number

  export function statically <A, B>(first: A, second: B): A
  export function statically <A, B>(first: A): (second: B) => A

  export const linearSeconds: RetryStrategy
}
