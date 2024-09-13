import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WechatIcon({ iconName = 'wechat', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
