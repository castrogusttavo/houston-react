import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TicTacToeIcon({
  iconName = 'tic-tac-toe',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
