import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PoundSendIcon({
  iconName = 'pound-send',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
