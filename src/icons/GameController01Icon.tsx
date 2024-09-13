import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GameController01Icon({
  iconName = 'game-controller-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
