import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Chatting01Icon({
  iconName = 'chatting-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
