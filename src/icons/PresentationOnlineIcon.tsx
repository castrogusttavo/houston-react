import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PresentationOnlineIcon({
  iconName = 'presentation-online',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
