import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JoggerPantsIcon({
  iconName = 'jogger-pants',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
